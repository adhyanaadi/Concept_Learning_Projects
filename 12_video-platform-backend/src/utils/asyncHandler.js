// const asynHandler = ()=>{}
// const asyncHandler = ()=>{()=>{}}
// const asyncHandler = ()=>()=>{}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.staus(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export {asyncHandler}

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}


export { asyncHandler }
