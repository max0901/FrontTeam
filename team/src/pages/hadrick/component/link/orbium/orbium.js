import * as styled from "./style";
const Orbium = () => {
  return (
    <styled.List id="4">
      <styled.head src="img/hand/orbiumhead.png" alt="" />
      <styled.proImg src="img/hand/orbiumpro.png" alt="" />
      <styled.Inner>
        <img src="img/hand/orbium.png" alt="" />
        <styled.Textbox>
          <h1>HENDRICK’S ORIGINAL</h1>
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
      {/* <styled.imgBox>
        <img src="img/hand/rightscall.png" alt="" />
        <img src="img/hand/leftscall.png" alt="" />
      </styled.imgBox> */}
    </styled.List>
  );
};
export default Orbium;
