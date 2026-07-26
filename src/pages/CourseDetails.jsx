import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="container py-20">
      <h1 className="text-5xl font-bold">
        Course Details {id}
      </h1>
    </div>
  );
}