import { useCurrentRefinements } from 'react-instantsearch-hooks-web';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function CurrentFilterBox() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { items, refine } = useCurrentRefinements();

  return (
    <div>
      {items.map((item) => item.refinements.map((e, index) => (
        <div key={index} className="flex items-center mt-3 text-secondary">
          <button
            type="button"
            className="font-bold px-2 py-0.5 bg-primary rounded-xl"
            key={index}
            onClick={() => {
              refine(e);
            }}
          >
            <div className="flex items-center">
              {e.value}
              <AiOutlineCloseCircle className="ml-1" />
            </div>
          </button>
        </div>
      )))}
    </div>
  );
}

export default CurrentFilterBox;
