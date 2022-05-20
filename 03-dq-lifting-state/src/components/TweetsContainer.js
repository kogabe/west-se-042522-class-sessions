import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUserId, setSelectedUserId] = useState(users[0].id)
  // originally I thought it might be easier to keep the whole selectedUser object in state, but 
  // when I got to the BONUS of updating likes on a user's tweets, I realized that I had created a problem
  // of not having a single source of truth for tweets in state, so I switched to using the user id

  function handleTweetLike(tweetId){
   // update the array of users
    const newUsers = users.map(user => {
      // find the selected user
      if (user.id === selectedUserId){
        // return a new user object that map will put into the newUsers array
        return {
          // copy all of the user key/values
          ...user,
          // overwrite tweets with new tweets
          // map through the users tweet, find the tweet to update by its id
          // return an updated tweet object
          tweets: user.tweets.map(tweet => tweet.id === tweetId ? 
            {...tweet, favorite_count: tweet.favorite_count + 1} :
            // for all other tweets, keep the old tweet in the array
             tweet)
        }
      } else {
        // for all other users, just keep the old user in the array
        return user
      }
    })
    // update our users in state with the newUsers array with the updated favorite tweet
    setUsers(newUsers)
  }

  // this will get re-evaluated anytime there's a state change
  const displayedUser = users.find(user => user.id === selectedUserId)

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleUserClick={setSelectedUserId}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={displayedUser} handleTweetLike={handleTweetLike}/>
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
