# Note-Taking App 📝  

This is a simple **Note-Taking App** built using React, where I learned key React concepts such as **immutability, prop lifting, mapping components, and passing methods as props**.  

## 🚀 Key Learnings  

### 1️⃣ **Immutability in React State**  
- Although objects in React state are technically mutable, **they should be treated as immutable** (like numbers, booleans, and strings).  
- Instead of modifying the existing object, **always create a new object and update the state**.  

### 2️⃣ **Lifting State Up**  
- In React, **props cannot be passed directly between sibling components**.  
- Instead, the state is **lifted up to the parent** and then passed down as props to the child components.  

### 3️⃣ **Using `map()` to Render Lists of Components**  
- The `.map()` function is useful for **dynamically rendering multiple components** of the same type with some differences in data.  
- Example: Displaying a list of notes by mapping over an array of note objects.  

### 4️⃣ **Passing Methods as Props**  
- In React, **functions can be passed as props** from a parent component to its child.  
- This allows child components to **modify the state of their parent** (e.g., deleting a note from a list).  
