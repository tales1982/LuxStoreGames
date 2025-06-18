////////////////////////////////////////////////////////////////////////////////////
// CUSTOM HOOK: useWallet                                                            
//                                                                                  
// Este hook React simplifica a conexão da aplicação com a carteira Ethereum        
// (por exemplo, MetaMask). Ele expõe o endereço conectado e um provider Ethers.js.  
////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import { ethers } from "ethers";

/**
 * useWallet - React hook para gerenciar conexão com carteira Web3.
 *
 * @returns {
 *   address: string | null - Endereço da conta conectada, ou null se não conectado.
 *   provider: ethers.BrowserProvider | null - Provider Ethers para interagir com a rede.
 * }
 */
export function useWallet() {
  // Estado para armazenar o endereço da carteira
  const [address, setAddress] = useState<string | null>(null);
  // Estado para armazenar o provider Ethers.js gerenciado pela BrowserProvider
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  useEffect(() => {
    // Verifica se o objeto Ethereum está disponível no window (MetaMask etc.)
    if ((window as any).ethereum) {
      // Cria um BrowserProvider do Ethers.js usando o provider inserido pela carteira
      const p = new ethers.BrowserProvider((window as any).ethereum);
      setProvider(p);

      // Solicita acesso às contas do usuário (prompt MetaMask)
      p.send("eth_requestAccounts", [])
        .then(([acct]: string[]) => {
          // Quando o usuário aprovar, salva o endereço na state
          setAddress(acct);
        })
        .catch((err) => {
          console.error("Erro ao solicitar contas:", err);
        });
    }
  }, []); // Executa apenas uma vez ao montar o componente

  // Retorna o endereço e o provider para uso em componentes
  return { address, provider };
}
