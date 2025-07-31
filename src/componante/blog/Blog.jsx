import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, HandelToBookmarks}) => {
    const {title, cover, author, author_img, posted_date, loading_time, hashtags} = blog
    return (
        <div className="space-y-4">
            <img className="w-full rounded-md" src={cover} alt={`cover image from ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                      <div>
                         <img  className="w-14 rounded-full" src={author_img} alt="" />
                      </div>
                      <div className="space-y-1">
                         <h4 className="font-bold">{author}</h4>
                         <p className="text-[#11111199]">{posted_date}</p>
                      </div>
                </div>
                <div className="flex items-center gap-2">
                    <span>{loading_time} min read</span>
              <button onClick={() => HandelToBookmarks(blog)} className="text-3xl text-lime-500 "> <FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((has ,idx)=> <span key={idx}><a href="">{has}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;