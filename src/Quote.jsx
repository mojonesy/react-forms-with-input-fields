function Quote({ quote: { text, author } }) {
    return (
        <div className="card" style={{margin:"10px 10px 15px"}}>
            <div className="card-header">Quote of the Day</div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{text}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            </div>
        </div>
    );
}

export default Quote;