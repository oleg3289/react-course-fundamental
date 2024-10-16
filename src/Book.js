const Book = ({ img, title, author, index }) => {
  return (
    <article className="book">
      <span>{`#${index + 1}`}</span>
      <img src={img} alt="The Message" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
