import ReachedItem from '../../molecules/ReachedItem';
import HorizontalLine from '../../molecules/ReachedItem/HorizontalLine';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem price="290M+" title="Players Top Up" />
          <HorizontalLine />
          <ReachedItem price="12.500" title="Games Available" />
          <HorizontalLine />
          <ReachedItem price="99,9%" title="Happy Players" />
          <HorizontalLine />
          <ReachedItem price="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>

  );
}
