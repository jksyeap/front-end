import React from 'react';

class CreateQAPanel extends React.Component {
  render() {
    return <div>
             <form onSubmit={this.props.addQ}>
               <h1>Create Q&A</h1>
               <input type="submit" value="Add Q & A" />
               <label for="newQ">Question:</label>
               <textarea value={this.props.newQ} name="newQ" onChange={this.props.handleChange}/>
               <label for="newA">Answer:</label>
               <textarea value={this.props.newA} name="newA" onChange={this.props.handleChange}/>
              </form>
           </div>;
  }
}

export default CreateQAPanel;