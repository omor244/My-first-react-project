

const Book = ({ book}) => {
    console.log(book)
    const {title} = book
    return (
        <div className="">
             <h3 className="text-3xl bg-slate-200 my-4 p-5 m-5 rounded-md">{title}</h3>
        </div>
    );
};

export default Book;