 import { Button, StyleSheet, Text, View } from 'react-native'
 import React, {useEffect} from 'react'

// const Home = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})


//This code defines our root reducer function, which takes the current state and an action as arguments and returns the updated state. The reducer function uses a `switch` statement to determine how to update the state based on the action type. If the action is `FETCH_USERS_REQUEST`, we update the state to indicate that the API call is starting. If the action is `FETCH_USERS_SUCCESS`, we update the state with the response data and indicate that the API call is complete. If the action is `FETCH_USERS_FAILURE`, we update the state to indicate that the API call failed and store the error message. If the action type is not recognized, we return the existing state. Finally, we export the root reducer function.

//```js
import { useSelector, useDispatch } from 'react-redux'; // Import the useSelector and useDispatch hooks from the react-redux library.
import { fetchUsers, increment, decrement } from './actions'; // Import the fetchUsers action creator function.

function Home() { // Define our App component.
  const dispatch = useDispatch(); // Get the dispatch function from the useDispatch hook.
  const users = useSelector((state) => state.root.users); // Get the users array from the Redux store using the useSelector hook.
  const loading = useSelector((state) => state.root.loading); // Get the loading boolean from the Redux store using the useSelector hook.
  const error = useSelector((state) => state.root.error);
  //const root = useSelector(state=>state.root) // Get the error message from the Redux store using the useSelector hook.
  const countes = useSelector(state=>state.counter)
  console.log(countes)
  useEffect(() => { // Use the useEffect hook to dispatch the fetchUsers action when the component mounts.
    dispatch(fetchUsers());
  }, [dispatch]); // Pass dispatch as a dependency to ensure that it is always up to date.

  if (loading) { // If the API call is still loading, display a loading message.
    return <Text>Loading...</Text>;
  }

  if (error) { // If the API call failed, display the error message.
    return <Text>Error: {error}</Text>;
  }

  return ( // If the API call was successful, display the list of users.
    <View>
      <Text>Users</Text>      
        {users?.map((user) => (
          <Text key={user.id}>{user.name}</Text>
        ))}

        <View>
          <Text>Counter {countes}</Text>
          <Button onPress={()=>dispatch(increment(countes))} title="+"/>
          <Button onPress={()=>dispatch(decrement(countes))} title="-"/>
        </View>
      
    </View>
  );
}

export default Home; // Export the App component.
