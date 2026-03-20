function handleFormSubmit(){
    console.log("Form submitted");
}

export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}>

            <input placeholder="write smtg" />
            <button>Submit</button>
        </form>
    )
}

