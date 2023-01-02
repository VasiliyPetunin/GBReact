import { TextField, Button } from "@mui/material"

export default function Form(props) {
    return (
        <>
        <form data-testid={props.testId} onSubmit={props.onSubmit} className={props.classForm}>
            <h1 className={props.classHeader}>Message Form:</h1>
            <TextField
                name="messageText"
                label="Message"
                defaultValue="Enter a text of the message"
                inputRef={props.inputRef}
                onBlur={props.handleChange}
                style={{marginTop: '10px', marginBottom: '10px'}}
            />
            <TextField
                name="messageAuthor"
                label="Author"
                defaultValue="Enter an author of the message"
                onBlur={props.handleChange}
                style={{marginTop: '10px', marginBottom: '10px'}}
            />
            <Button variant="contained" type="submit">Send message</Button>
        </form>
        </>
    )
}