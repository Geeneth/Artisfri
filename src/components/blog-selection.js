function BlogSelection(props) {

    const blog_selection_function = (title, body, body_2) => {
        props.onClickFunction(title, body, body_2);
    };

    return (
        <div className="blog-selection">
            <img className="blog-button-image" src={props.image} alt="logo" onClick={() => blog_selection_function(props.title, props.body, props.body_2)}/>
            <h3 className="blog-button-title">{props.title}</h3>
        </div>
    );
}

export default BlogSelection;