/*
 * Programming Quiz: Facebook Friends
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// your code goes here

const facebookProfile = {
    name: "Jhon",
    friends: 24,
    messages: ["message1", "message2", "message3", "message4", "message5"],
    postMessage: (post)=> {
        facebookProfile.messages.push(post)
        return  facebookProfile.messages[-1]
    },
    deleteMessage: (post)=> {
        facebookProfile.messages.splice(post, 1)
        return facebookProfile.messages
    },
    addFriend: ()=> {
        facebookProfile.friends += 1
        return "you have " +  facebookProfile.friends+" friends" 
    },
    removeFriend: ()=> {
        facebookProfile.friends -= 1
        return "you have " +  facebookProfile.friends+" friends" 
    }
}


// text code
console.log("Name: ", facebookProfile.name);
console.log("Messages: ", facebookProfile.messages);
facebookProfile.postMessage("New message!");
console.log("Messages: ",  facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log("Messages: ",  facebookProfile.messages);
console.log("Friends: ", facebookProfile.friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friends);