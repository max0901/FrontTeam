import * as styled from "./style";
const Luna = () => {
  return (
    <styled.List id="2">
      <img src="img/hand/lunahead.png" alt="" />
      <styled.Inner>
        <img src="img/hand/luna.png" alt="" />
        <styled.Textbox>
          <styled.star src="img/hand/start.png" alt="" />
          <h1>HENDRICK’S LUNAR</h1>
          <span>LIMITED RELEASE</span>
          <p>
            HENDRICK’S LUNAR is a delightfully smooth and alluring gin that is
            rich with night blooming floral essence, offering a delicate balance
            of warm baked spices, and finished with a crisp burst of citrus.
            LUNAR is best enjoyed during casual nights at home and is a curious
            companion for sundowners and starry nights with friends.
          </p>
          <p>43.4% ABV</p>
        </styled.Textbox>
      </styled.Inner>
    </styled.List>
  );
};
export default Luna;
