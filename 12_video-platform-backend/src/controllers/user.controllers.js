import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/clouidnary.js";
import { apiRespone } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;

  if (fullName === "") {
    throw new apiError(400, "fullName is required");
  }

  if (
    [fullName, email, password, username].some((fiels) => field?.trim() === "")
  ) {
    throw new apiError(400, "All fields are required!");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new apiError(409, "User already exists!");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new apiError(400, "Avatar file is required!");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new apiError(400, "Avatar file is required!");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const cratedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!cratedUser) {
    throw new apiError(500, "Something went wron while registering the user!");
  }

  return res
    .status(201)
    .json(new apiRespone(200, cratedUser, "User registeres successfully!"));
});

export { registerUser };
