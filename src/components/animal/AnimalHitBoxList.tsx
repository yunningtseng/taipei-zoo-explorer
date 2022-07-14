import { useEffect, useRef } from 'react';
import { useInfiniteHits } from 'react-instantsearch-hooks-web';
import { SimpleAnimalHit } from '../../types/animal';
import AnimalHitBox from './AnimalHitBox';

function AnimalHitBoxList() {
  const { hits, isLastPage, showMore } = useInfiniteHits<SimpleAnimalHit>();
  const targetRef = useRef(null);

  // console.log(hits);

  useEffect(() => {
    if (targetRef.current === null) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLastPage) {
          showMore();
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLastPage, showMore]);

  // TODO
  if (hits.length === 0) {
    return <div>查無動物</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {hits.map((e, index) => (
        <AnimalHitBox key={index} hit={e} />
      ))}
      <div ref={targetRef} />
    </div>
  );
}

export default AnimalHitBoxList;
