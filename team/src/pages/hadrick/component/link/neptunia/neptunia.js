import * as styled from "./style";
const Neptunia = () => {
  return (
    <styled.List id="3">
      <styled.head src="img/hand/nephead.png" alt="" />
      <styled.Inner>
        <img src="img/hand/neptiu.png" alt="" />
        <styled.Textbox>
          <styled.NewImg src="img/hand/nepnuw.png" alt="" />
          <h1>
            <img src="img/hand/nuptext.png" alt="" />
          </h1>
          <span>LIMITED RELEASE</span>
          <p>
            The sea is everything! Invigorated by a bracing breath of fresh
            coastal air and entranced by the endless living mysteries of the
            sea, Ms. Lesley Gracie considered a bold possibility: She longed to
            express the glorious sensory delights of the coast, as a gin. And so
            began HENDRICK’S NEPTUNIA GIN.
          </p>
          <p>43.4% ABV</p>
        </styled.Textbox>
      </styled.Inner>
    </styled.List>
  );
};
export default Neptunia;
