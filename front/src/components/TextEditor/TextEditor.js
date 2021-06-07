import './TextEditor.css';

function TextEditor(props) {
    return (
        <div className ="text-editor lock">
            <label> {props.name} </label>
            <div className="text-editor__edit_row">
                <input className="edit_row__edit-field" placeholder={props.emptyText} readOnly={props.state === 'lock'} value={props.value}></input>
                <input type="button" className ="edit_row__btn-cancel"></input>
            </div>
        </div>
    );
  }
  export default TextEditor;
