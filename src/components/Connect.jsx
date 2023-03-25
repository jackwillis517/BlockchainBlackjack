import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useState } from "react";
import { Spin, message } from "antd";

const Connect = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const [connectClicked, setConnectClicked] = useState(false);

  if (isConnected) {
    return (
      <div className="bg-black text-white text-center pb-2 pt-2">
        <div>
          <h1>
            Connected to:{" "}
            <a className="text-theme-red font-bold">
              {" "}
              {address.substring(0, 6)}...{address.slice(38)}
            </a>
          </h1>
        </div>
        <button
          className="bg-theme-red rounded-xl mt-4 mb-2 p-2 hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90"
          onClick={disconnect}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div>
      {connectClicked ? (
        <div className="bg-black text-white text-center">
          <ul className="pb-7">
            <li>
              <button
                className="text-theme-red text-3xl font-medium mb-4 mt-6"
                onClick={() => setConnectClicked(!connectClicked)}
              >
                X
              </button>
            </li>
            {connectors.map((connector) => (
              <li>
                <button
                  className="p-2 hover:text-theme-red"
                  disabled={!connector.ready}
                  key={connector.id}
                  onClick={() => connect({ connector })}
                >
                  {isLoading && connector.id === pendingConnector?.id
                    ? ""
                    : connector.name}
                  {!connector.ready && " (unsupported)"}
                  {isLoading && connector.id === pendingConnector?.id && (
                    <Spin size="medium" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-black text-white text-center">
          <button
            className="bg-theme-red text-xl rounded-3xl m-4 p-2 px-4 hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90"
            onClick={() => setConnectClicked(!connectClicked)}
          >
            Connect Wallet
          </button>
        </div>
      )}

      {/* {error && <div>{error.message}</div>} */}
    </div>
  );
};

export default Connect;
