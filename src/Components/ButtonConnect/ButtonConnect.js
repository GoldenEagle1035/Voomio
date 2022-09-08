import React, { useEffect, useRef, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    availableWallets,
    connectWallet,
    loadAssets,
} from "../../store/wallet/api";
import { WALLET_STATE } from "../../store/wallet/walletTypes";

import "./ButtonConnect.css";

const wallets = {
    ccvault: {
        title: "ccvault.io",
        image: "/images/wallets/ccvault.png",
    },
    gerowallet: {
        title: "GeroWallet",
        image: "/images/wallets/gero.png",
    },
    nami: {
        title: "Nami",
        image: "/images/wallets/nami.svg",
    },
};

const ButtonConnect = ({
    state_wallet,
    availableWallets,
    connectWallet,
    loadAssets,
}) => {
    const [showNotification, setShowNotification] = useState(false);
    const [showNotificationMessage, setShowNotificationMessage] = useState(false);
    const [showWallets, setShowWallets] = useState(false);

    const onclick_connect_wallet = () => {
        availableWallets((res) => {
            if (res.wallets.length === 0) {
                setShowNotification("no-wallet");
            } else if (res.wallets.length === 1) {
                connect_wallet(res.wallets[0]);
            } else if (res.wallets.length > 1) {
                setShowWallets(res.wallets);
            }
        });
    };

    const connect_wallet = (wallet_name) => {
        setShowWallets(false);
        connectWallet(wallet_name, (res) => {
            if (!res.success) {
                setShowNotificationMessage(res.msg);
            }
        });
    };

    const ref = useRef();
    
    useEffect(() => {
        if (state_wallet.loading) {
            if (
                [
                    "no-wallet",
                    "no-accept",
                    "connected",
                    WALLET_STATE.CONNECTING,
                    WALLET_STATE.GETTING_ASSETS,
                ].includes(state_wallet.loading)
            )
                setShowNotification(state_wallet.loading);
        } else {
            setShowNotification(false);
        }

        if (
            state_wallet.connected &&
            !state_wallet.loading &&
            !state_wallet.loaded_assets
        ) {
            loadAssets(state_wallet, (res) => { });
        }
    }, [loadAssets, state_wallet]);

    const clear_notification = () => {
        setShowNotification(false);
        setShowNotificationMessage(false);
    };

    return (
        <>
            {!state_wallet.connected ? (
                <button
                    className="buttonborder menufont text-white font-bold py-3 lg:px-10 md:px-5"
                    onClick={() => onclick_connect_wallet()}
                >
                    Connect Wallet
                </button>
            ) : (<></>)}

            {showNotification || showNotificationMessage !== false ? (
                <div className="notification-window notification is-info">
                    <button
                        className="delete"
                        onClick={() => clear_notification()}
                    ></button>
                    {showNotification === "no-wallet" ? (
                        <p>
                            No wallet installed.{" "}
                            <a href="https://namiwallet.io/" target="_blank" rel="noreferrer">
                                Get it now
                            </a>
                            .
                        </p>
                    ) : showNotification === "no-accept" ? (
                        <p>You need to allow wallet access.</p>
                    ) : showNotification === "connected" ? (
                        <p>Wallet connected</p>
                    ) : showNotification === WALLET_STATE.CONNECTING ? (
                        <p>Connecting wallet...</p>
                    ) : showNotification === WALLET_STATE.GETTING_ASSETS ? (
                        <p>Getting assets in your wallet...</p>
                    ) : showNotificationMessage !== false ? (
                        <p>{showNotificationMessage}</p>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <></>
            )}

            {showWallets ? (
                <div className="fixed backdrop-filter backdrop-blur-sm bg-backdrop flex items-center justify-center overflow-auto z-50 inset-0">
                    <div
                        className="relative bg-white dark:bg-blue-darkest rounded-xl shadow-xl px-16 py-10 max-w-xl w-11/12 md:w-full"
                        ref={ref}
                    >
                        <div className="text-center mb-7">
                            <h1 className="text-blue-dark dark:text-gray-lightest mb-10 font-bold text-3xl">
                                Select wallet
                            </h1>
                        </div>{" "}
                        <button
                            type="button"
                            onClick={onclick_connect_wallet}
                            className="absolute text-2xl px-2.5 text-gray-dark top-3 right-3 hover:opacity-100 opacity-70"
                        >
                            <i className="fas fa-times" />
                        </button>{" "}
                        <div className="flex justify-center gap-7">
                            {showWallets &&
                                showWallets.length > 0 &&
                                showWallets.map((name) => (
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => connect_wallet(name)}
                                            className="relative w-36 p-3 bg-gray-lightest dark:bg-blue-darker rounded-xl text-blue-dark dark:text-gray-regular bg-opacity-60 border-2 hover:bg-opacity-10 dark:hover:bg-blue-meta dark:hover:bg-opacity-20 hover:bg-blue-light hover:border-blue-light text-lg font-semibold dark:border-blue-darkest"
                                        >
                                            <img
                                                src={wallets[name].image}
                                                alt="eternl wallet"
                                                className="w-16 h-16 p-2 mx-auto mb-2"
                                            />
                                            {name}
                                            <div className="text-xs font-normal mt-1.5 text-blue-dark dark:text-blue-meta">
                                                <i className="fas fa-link" />
                                                enabled
                                            </div>
                                        </button>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

function mapStateToProps(state, props) {
    return {
        state_wallet: state.wallet,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        availableWallets: (callback) => dispatch(availableWallets(callback)),
        connectWallet: (is_silent, callback) =>
            dispatch(connectWallet(is_silent, callback)),
        loadAssets: (wallet, callback) => dispatch(loadAssets(wallet, callback)),
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(
    ButtonConnect
);
