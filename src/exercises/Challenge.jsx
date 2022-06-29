import emojipedia from "./emojiDB";

const meanings = emojipedia.map( function(emoji){
    return emoji.meaning.substring(0, 100);
})

export default meanings;