import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToBlogs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromBlogs = location.state?.from === 'blogs';

  const handleClick = (e: React.MouseEvent) => {
    if (fromBlogs) {
      e.preventDefault();
      navigate(-1);
    }
  };

  return (
    <Link
      to="/blogs"
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Blogs
    </Link>
  );
};

export default BackToBlogs;
