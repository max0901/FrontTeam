import * as styled from "./style";
const HandricksJin = () => {
  return (
    <styled.List id="1">
      <img src="img/hand/headdeco.png" alt="" />
      <styled.Boom src="img/hand/boom.png" alt="" />
      <styled.Boom2 src="img/hand/boom.png" alt="" />
      <styled.Inner>
        <img src="img/hand/HANDRICKS.png" alt="" />
        <styled.Textbox>
          <h1>HENDRICK’S ORIGINAL</h1>
          <span>Deliciously infused with rose and cucumber.</span>
          <p>
            HENDRICK’S is an unusual gin created from eleven fine botanicals.
            The curious, yet marvellous, infusions of rose & cucumber imbue our
            spirit with its uniquely balanced flavour resulting in an impeccably
            smooth distinct gin.
          </p>
          <p> 41.4% ABV</p>
        </styled.Textbox>
      </styled.Inner>
      <styled.Balloon src="img/hand/boom2.png" alt="" />
    </styled.List>
  );
};
export default HandricksJin;
