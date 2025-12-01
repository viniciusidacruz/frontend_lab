"use client";

import Image from "next/image";
import { Copy, Check, QrCode } from "lucide-react";

import { cn } from "@/shared/config";
import { usePixDonation } from "@/shared/hooks";

interface PixDonationProps {
  label: string;
}

export const PixDonation = ({ label }: PixDonationProps) => {
  const { payload, qrCodeUrl, isLoading, error, copied, handleCopy } =
    usePixDonation();

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center py-8">
          <p className="text-zinc-400">Carregando dados do Pix...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col gap-2 py-4">
          <p className="text-red-400 text-sm">{error}</p>
          <p className="text-zinc-500 text-sm">
            Tente novamente em instantes ou entre em contato se o problema
            persistir.
          </p>
        </div>
      );
    }

    return (
      <>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label
              htmlFor="pix-payload"
              className="block text-sm text-zinc-500 mb-2"
            >
              Pix copia e cola
            </label>
            <div className="flex items-center gap-2">
              <input
                id="pix-payload"
                type="text"
                value={payload}
                readOnly
                className="flex-1 px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-300 text-xs sm:text-sm font-mono break-all min-w-0"
              />
              <button
                type="button"
                onClick={handleCopy}
                disabled={!payload}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  copied
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                aria-label={copied ? "Copiado!" : "Copiar chave PIX"}
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="mt-2 text-xs text-zinc-500">
              No app do banco, confira o nome do recebedor antes de confirmar.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="block text-sm text-zinc-500 mb-2">QR Code</p>
          <div className="bg-white p-4 rounded-lg inline-block">
            <div className="w-48 h-48 flex items-center justify-center rounded">
              {qrCodeUrl ? (
                <Image
                  src={qrCodeUrl}
                  alt="QR Code Pix"
                  className="w-48 h-48"
                  width={192}
                  height={192}
                  priority
                />
              ) : (
                <span className="text-zinc-500 text-xs text-center px-2">
                  QR Code indisponível
                </span>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <QrCode className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-zinc-100">{label}</h3>
      </div>

      {renderContent()}
    </div>
  );
};
