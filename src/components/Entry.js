import React from "react";

export const Entry = ({ entry, mood, tags, onEditButtonClick, onDeleteButtonClick }) => {
  const getMessageType = () => {
    if (mood) {
      switch (mood.label) {
        case 'Angry':
          return 'is-danger'
        case 'Happy':
          return 'is-success'
        case 'Ok':
          return 'is-warning'
        case 'Sad':
          return 'is-primary'
        default:
          break;
      }
    }
  }

  return (
    <article className={`message ${getMessageType()}`} style={{width:"100%"}}>
      <div className="message-body">
        <p className="entry__concept">{entry.concept}</p>
        <p className="entry__entry">{entry.entry}</p>
        <p className="entry__date">{entry.date}</p>
        <p className="entry__mood">{mood?.label}</p>
        {/*map over entry tags prop for id in entry.tags array
        then find the tag label from the tags table from the row with a matching entry.tag id
        then return the label of each tag */}
        <p className="entry__tags">{entry.tags.map(t => {
          return tags.find((tag) => {
            console.log(tags, tag, t)
            return tag.id === t.id})?.label
        })}</p>
        <div className="buttons">
          <button className={`button ${getMessageType()} is-outlined`} onClick={
            () => {
              onEditButtonClick(entry.id)
            }
          }>Edit</button>
          <button className={`button ${getMessageType()}`} onClick={
            () => {
              onDeleteButtonClick(entry.id)
            }
          }>Delete</button>
        </div>
      </div>
    </article>
  )
};
