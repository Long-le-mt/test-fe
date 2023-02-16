import React from "react";
import "./styles.css";

Body.propTypes = {};

const LIST_ITEM = [
  {
    header: "Lorem ipsum dolor sit amet",
    img: "https://s3-alpha-sig.figma.com/img/ee5d/7134/af6932e0d359fce7f35402c40d54bc99?Expires=1677456000&Signature=mtWgvLHAfvB9Ss9sH14HAx717YxiFznq5ZOjtVCjAy3qbRdu3SX0no~LByn~set0MalKtUArD52eE2cq28f0HYrSJW68XwcYhH77ojJzkifhkGyzOC5OR8vdyvM6WprwU3j-hPuislh~LiB4nUDkVctSBcHXn~tpMkjsL8YblNZIyeZnSb770FI9PQ-SN~f8zuJepQCZAXSJmcjjVLX~2fF90wXSoC7GUD4zmhg4~phVwIyFRmPP40E3BQhsCzd-ZyAS5M78lzmfUMlHtJSDpqU2PEnYTNKv33UO54uxLq--jZ1fTGaYmLpGHm10cr4MqomB-0VjCuQq7gN3s-5AEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nondui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultricesliquam egestas nunc at ullamcorper ultricies. Donec feugiatvelit nulla, vel sodales est ullamcorper id. Aenean consequatcondimentum velit ut tempor. Nam porta massa in metus bibendumcongue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    header: "Lorem ipsum dolor sit amet",
    img: "https://s3-alpha-sig.figma.com/img/2283/e203/66ceb1e8d5d276758ee00c3663bae8e9?Expires=1677456000&Signature=BNyeW8cuQIalWuZeWB3FgzVhzbWHAp1kdU06HdUgF9fYHpPsdM9FaEJ6UFcPYTDOhiaxvXRlCdgdKBEUpiZYQSi~6J1i29lYMM3XFKigPJF3mHSdEpzklMSU3TsxWu2apI7N4d6WTeHTiA9sWlEjE8k03gLG0ntEgQ6A9~YtgOdHg5pPP9NSpkvYZ~iqvGeCz54h4KD4BeegJyxi2-XrxNbGIEGQm-IEqMyETVk6vMUlrCEGeFuOc7jMmG4hPFxyFtbFoV1cZvAXzg07oN-BZ~QQYOq1zk-imD2Hx76KPI2HN6u6RgMr4ibKZb~M3Ofd16NKA3z~OFckZTSyGt2Vag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nondui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultricesliquam egestas nunc at ullamcorper ultricies. Donec feugiatvelit nulla, vel sodales est ullamcorper id. Aenean consequatcondimentum velit ut tempor. Nam porta massa in metus bibendumcongue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    header: "Lorem ipsum dolor sit amet",
    img: "https://s3-alpha-sig.figma.com/img/c9c3/230b/112f1704f67d2cb7c852b396cde6858e?Expires=1677456000&Signature=f3-ym4ZJYM7O7pgMICG95jpEsEVIOgHhx1PvdhcoNxfHSt7h76MkJrvKxVExm7TtK7VQOskbcsIdBRd6hdn2BL~DivtIekNN0WpsTqV5HFV6wD2JCrR2hBJzGnfg6SzC1qTlgfUMmaespPtd8YLPhH1n-uinZu-VwOHbM2RWrdSZOh1C8IWQXe8XFJEUtfSTxa~~aFUL7rzQGdjRjGAEJMJOU87MRl3meXGxF695FX~Xrhn8tVmeM~ltFDwYlBDhjE773S~xgAu~gUSCXeh~-QlI1SzjSeSDqySxTMjG2DhNyVKB~hxtzfWr9uNAQ3W8UBEF0fgrNDupbKK5tfEOoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nondui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultricesliquam egestas nunc at ullamcorper ultricies. Donec feugiatvelit nulla, vel sodales est ullamcorper id. Aenean consequatcondimentum velit ut tempor. Nam porta massa in metus bibendumcongue. Pellentesque ultrices vestibulum mattis.",
  },
];

function Body(props) {
  return (
    <>
      <div className="body">
        <div className="body__img">
          <img
            src="https://s3-alpha-sig.figma.com/img/be54/004d/40b2754bf32a69e46f3afbc0bc31cd28?Expires=1677456000&Signature=bw2wI8MzSZhXKb7rR2hyBGpqQK4aIV5xlxHOPdtQ3D86Ugt56WcPRFp824outM7qbeYBXanKJYqa8G3lzQbQzsE46C6uX8CAp3Im8FD1FwSnCgwhqILFQEFjSdjqpsKf13IgaPObYNNBuQeQh9FEBmlei4c3qpOwQmhE--w8mL1dCeKuMBYZvFCKTXazT04gfqcbTtP5BSV1ltWA2Yuvq4lOz54YRtx-waLym4-x6jxtVPg8He8tfO1I9KDymWYtRztMvyVNZdZSL~shY2Oi4sv1n62Chv~zl6l1To3K3tqoTCQo7mLmbi89uywKgMJBnrW0eiIoqlZY0l-vn6CCmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className="body__paragraph">
          <h5>Lorem ipsum dolor sit asmet?</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
        <div className="body__list-item">
          {LIST_ITEM.map((item, index) => (
            <div className="item">
              <h5 className="item__header">{item.header}</h5>
              <div className="item__body">
                <img src={item.img} alt="" />
                <p>{item.content}</p>
              </div>
            </div>
          ))}
          {/* <div className="item">
            <h5 className="item__header">Lorem ipsum dolor sit amet</h5>
            <div className="item__body">
              <img
                src="https://s3-alpha-sig.figma.com/img/ee5d/7134/af6932e0d359fce7f35402c40d54bc99?Expires=1677456000&Signature=mtWgvLHAfvB9Ss9sH14HAx717YxiFznq5ZOjtVCjAy3qbRdu3SX0no~LByn~set0MalKtUArD52eE2cq28f0HYrSJW68XwcYhH77ojJzkifhkGyzOC5OR8vdyvM6WprwU3j-hPuislh~LiB4nUDkVctSBcHXn~tpMkjsL8YblNZIyeZnSb770FI9PQ-SN~f8zuJepQCZAXSJmcjjVLX~2fF90wXSoC7GUD4zmhg4~phVwIyFRmPP40E3BQhsCzd-ZyAS5M78lzmfUMlHtJSDpqU2PEnYTNKv33UO54uxLq--jZ1fTGaYmLpGHm10cr4MqomB-0VjCuQq7gN3s-5AEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="item">
            <h5 className="item__header">Lorem ipsum dolor sit amet</h5>
            <div className="item__body">
              <img
                src="https://s3-alpha-sig.figma.com/img/ee5d/7134/af6932e0d359fce7f35402c40d54bc99?Expires=1677456000&Signature=mtWgvLHAfvB9Ss9sH14HAx717YxiFznq5ZOjtVCjAy3qbRdu3SX0no~LByn~set0MalKtUArD52eE2cq28f0HYrSJW68XwcYhH77ojJzkifhkGyzOC5OR8vdyvM6WprwU3j-hPuislh~LiB4nUDkVctSBcHXn~tpMkjsL8YblNZIyeZnSb770FI9PQ-SN~f8zuJepQCZAXSJmcjjVLX~2fF90wXSoC7GUD4zmhg4~phVwIyFRmPP40E3BQhsCzd-ZyAS5M78lzmfUMlHtJSDpqU2PEnYTNKv33UO54uxLq--jZ1fTGaYmLpGHm10cr4MqomB-0VjCuQq7gN3s-5AEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="item">
            <h5 className="item__header">Lorem ipsum dolor sit amet</h5>
            <div className="item__body">
              <img
                src="https://s3-alpha-sig.figma.com/img/ee5d/7134/af6932e0d359fce7f35402c40d54bc99?Expires=1677456000&Signature=mtWgvLHAfvB9Ss9sH14HAx717YxiFznq5ZOjtVCjAy3qbRdu3SX0no~LByn~set0MalKtUArD52eE2cq28f0HYrSJW68XwcYhH77ojJzkifhkGyzOC5OR8vdyvM6WprwU3j-hPuislh~LiB4nUDkVctSBcHXn~tpMkjsL8YblNZIyeZnSb770FI9PQ-SN~f8zuJepQCZAXSJmcjjVLX~2fF90wXSoC7GUD4zmhg4~phVwIyFRmPP40E3BQhsCzd-ZyAS5M78lzmfUMlHtJSDpqU2PEnYTNKv33UO54uxLq--jZ1fTGaYmLpGHm10cr4MqomB-0VjCuQq7gN3s-5AEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Body;
