"use client";

import React, { useState } from "react";
import { useWallet } from "../../../hooks/useWallet";
import { getTokenContract } from "../../../lib/contracts";
import { ethers } from "ethers";

export default function Earn() {
  const { address, provider } = useWallet();
  const [earned, setEarned] = useState(false);

  const mintTokens = async () => {
    if (!provider || !address) return;
    try {
      // Aguarda o signer ser obtido
      const signer = await provider.getSigner();
      // Instancia o contrato com o signer
      const token = getTokenContract(signer);
      // Mint: envia a transação e aguarda confirmação
      const tx = await token.mint(address, ethers.parseUnits("10", 18));
      await tx.wait();
      setEarned(true);
    } catch (error) {
      console.error("Erro ao mintar tokens:", error);
    }
  };

  return (
    <div>
      <h2 >Ganhe GAM</h2>
      <p>Clique no botão para responder ao quiz e receber 10 GAM</p>
      <button
        onClick={mintTokens}
        disabled={!address || earned}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {earned ? "Tokens Recebidos!" : "Fazer Quiz"}
      </button>
    </div>
  );
}
