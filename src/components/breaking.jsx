import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  return (
    <div className="flex">
      <div className="btn btn-danger">Breaking news</div>
      <Marquee pauseOnHover={true}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
