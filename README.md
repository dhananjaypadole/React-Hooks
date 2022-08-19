# REACT HOOKS 

### 1) useState
 
 syntax:
 ```
  const [varname2,function] = useState(varname1)

                OR

 const [varname2,function] = React.useState(varname1)
 ```

 in place of varname1 we can directly pass value as well

 ### 2) useReducer

if you are working on small apllication then useState is best and 
if you are working on big application then useReducer is best 

syntax:
```
const [state,dispatch] = useReducer(reducer,initialData)

state --> is same as initialData (like we have in useState)
dispatch --> is used to trigger reducer function
reducer --> is a function, using reducer we will update state 
initialData --> holds initial data
```

we also have to create reducer function whichis created as below
```
 const reducer = (state,action)=>{}

 state --> initial value 
action --> action/ operation which we want to perform
```

### 3) useEffect

When To Use:
1) If you want to display something only once after page load that time we can use useEffect Hook
2) When you want to display message count(/chat count) like whats app in title
   -- remember this syntax for title
   ```
    document.title = `Chats(${myNum})`;
    ```

## Note:
1) always write hook just below the function created before return (or above the return) 