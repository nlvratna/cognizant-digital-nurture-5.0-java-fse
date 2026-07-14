import { useState } from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

export default function App() {
  const [activeTab, setActiveTab] = useState("book");
  const [showExtras, setShowExtras] = useState(false);

  const renderContentUsingIfElse = () => {
    if (activeTab === "book") {
      return <BookDetails />;
    } else if (activeTab === "blog") {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  };

  const componentMap = {
    book: <BookDetails />,
    blog: <BlogDetails />,
    course: <CourseDetails />,
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Blogger App Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("book")}>Show Books</button>
        <button onClick={() => setActiveTab("blog")}>Show Blogs</button>
        <button onClick={() => setActiveTab("course")}>Show Courses</button>
      </div>

      <hr />

      <h3>1. Rendered via If/Else Helper Function:</h3>
      {renderContentUsingIfElse()}

      <hr />

      <h3>2. Rendered via Object Mapping:</h3>
      {componentMap[activeTab]}

      <hr />

      <h3>3. Rendered via Ternary Operator:</h3>
      {activeTab === "book" ? (
        <BookDetails />
      ) : activeTab === "blog" ? (
        <BlogDetails />
      ) : (
        <CourseDetails />
      )}

      <hr />

      <h3>4. Rendered via Logical AND (&&):</h3>
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setShowExtras(e.target.checked)}
          />
          Show Extra Details
        </label>
      </div>

      {showExtras && (
        <div style={{ background: "#eee", padding: "10px" }}>
          <p>
            <strong>Extra Info:</strong> You are currently viewing the
            {activeTab} section.
          </p>
        </div>
      )}
    </div>
  );
}
