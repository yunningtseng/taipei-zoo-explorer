import { BsDot } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Animal } from '../../types/animal';
import conservation from '../../images/conservation.jpg';
import IMG_BASE_URL from '../../api/url';
import { setIsPhonetic } from '../../store/animalSlice';

function AnimalBox() {
  const dispatch = useAppDispatch();
  const animal: Animal = useAppSelector((state) => state.animal.animal);
  const isPhonetic = useAppSelector((state) => state.animal.isPhonetic);

  if (!animal.id) {
    return <div />;
  }

  return (
    <div>
      <div className="flex justify-end mb-5 mr-5">
        <button
          type="button"
          className="h-8 text-sm sm:text-base font-bold px-2 py-1 border rounded-xl text-dark bg-light hover:bg-dark hover:text-white"
          onClick={() => {
            dispatch(setIsPhonetic(!isPhonetic));
          }}
        >
          {!isPhonetic ? 'ㄅ' : '中'}
        </button>
      </div>

      <div className={isPhonetic ? 'font-bpm1' : ''}>
        <div className="md:flex justify-between">
          {animal.mainPic && (
            <img
              src={IMG_BASE_URL + animal.mainPic}
              alt="img"
              className="w-full h-full md:w-1/2 lg:w-2/3 rounded-lg object-center object-cover"
            />
          )}
          <div className="w-full mt-5 md:mt-0 ml-0 sm:ml-5 font-bold text-dark">
            <div>
              <p className="mt-5 sm:mt-0 text-3xl lg:text-4xl tracking-[.1em]">
                {animal.name}
              </p>
              <p className="text-lg lg:text-xl mt-3">{animal.enName}</p>
              <p className="text-lg lg:text-xl mt-3 italic">
                {animal.latinName}
              </p>
            </div>
            <div className="mt-8 text-xl ">
              <p className="mt-3">{animal.class}</p>
              <p className="mt-3">{animal.order}</p>
              <p className="mt-3">{animal.family}</p>
              {animal.conservation !== '' ? (
                <div>
                  <p className="mt-3">{`保育分級: ${animal.conservation}`}</p>
                  <img
                    src={conservation}
                    alt="img"
                    className="w-full rounded-lg object-center object-cover mt-3"
                  />
                </div>
              ) : (
                <div />
              )}
            </div>
            <div />
          </div>
        </div>

        <div className="my-5 sm:my-10 text-lg border-y-2">
          <div className="flex">
            {animal.alsoknown.length !== 0 ? (
              <div className="mt-3">
                <span className="mr-3 text-secondary font-bold">別稱</span>
                {animal.alsoknown.map((alsoknown, index) => (
                  <div key={index}>
                    <div className="flex items-start">
                      <div className="pt-1">
                        <BsDot />
                      </div>
                      {alsoknown}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div />
            )}
          </div>

          {animal.diet.length !== 0 ? (
            <div className="my-3">
              <span className="mr-3 text-secondary font-bold">飲食</span>
              {animal.diet.map((diet, index) => (
                <div key={index}>
                  <div className="flex items-start">
                    <div className="pt-1">
                      <BsDot />
                    </div>
                    {diet}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
          {animal.habitat.length !== 0 ? (
            <div className="my-3">
              <span className="mr-3 text-secondary font-bold">棲息地</span>
              {animal.habitat.map((habitat, index) => (
                <div key={index}>
                  <div className="flex items-start">
                    <div className="pt-1">
                      <BsDot />
                    </div>
                    {habitat}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
          {animal.feature.length !== 0 ? (
            <div className="my-3">
              <span className="mr-3 text-secondary font-bold">特徵</span>
              {animal.feature.map((feature, index) => (
                <div key={index}>
                  <div className="flex items-start">
                    <div className="pt-1">
                      <BsDot />
                    </div>
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
          {animal.behavior.length !== 0 ? (
            <div className="my-3">
              <span className="mr-3 text-secondary font-bold">行為</span>
              {animal.behavior.map((behavior, index) => (
                <div key={index}>
                  <div className="flex items-start">
                    <div className="pt-1">
                      <BsDot />
                    </div>
                    {behavior}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
          {animal.crisis.length !== 0 ? (
            <div className="my-3">
              <span className="mr-3 text-secondary font-bold">危機</span>
              {animal.crisis.map((crisis, index) => (
                <div key={index}>
                  <div className="flex items-start">
                    <div className="pt-1">
                      <BsDot />
                    </div>
                    {crisis}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className="mt-10">
          {animal.pics.map((pic, index) => (
            <img
              key={index}
              src={IMG_BASE_URL + pic}
              alt="img"
              className="w-2/3 rounded-lg mt-3"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimalBox;
