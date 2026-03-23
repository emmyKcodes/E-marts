"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="hidden lg:block w-full border-t border-border bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-10 py-12 max-w-341.65">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_0.5fr_0.5fr_0.5fr] ">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Image
                src="/emart_logo.svg"
                alt="E-Marts"
                width={288}
                height={60}
                className="h-8.5 w-fit"
              />
            </div>

            <p className="text-sm  font-light leading-relaxed max-w-60">
              We get deliveries delivered to you in no time from a wide variety
              of vendors.
            </p>

            <div className="flex items-center gap-4 mt-1">
              <Link
                href="#"
                aria-label="Facebook"
                className="font-semi-light hover:text-[#979799] transition cursor-pointer"
              >
                <FaFacebook size={20} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="font-semi-light hover:text-[#979799] transition cursor-pointer"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://tiktok.com"
                aria-label="TikTok"
                className="font-semi-light hover:text-[#979799] transition cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" />
                </svg>
              </Link>

              <Link
                href="https://threads.net"
                aria-label="Threads"
                className="font-semi-light hover:text-[#979799] transition cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.473 12.01v-.017c.027-3.579.877-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.594 12c.022 3.086.713 5.496 2.051 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.397-.893h-.038c-.82 0-1.995.226-2.734 1.28l-1.752-1.1c.992-1.521 2.6-2.359 4.493-2.359h.063c3.156.025 5.048 1.952 5.187 5.29.074.036.148.073.221.112 1.199.645 2.124 1.56 2.669 2.644.878 1.753.871 4.457-1.033 6.306-1.978 1.93-4.381 2.64-7.676 2.663z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-md font-semibold text-ink tracking-wide mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {["About us", "FAQ", "Contact us"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted hover:text-ink transition cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-md font-semibold text-ink tracking-wide mb-4">
              Privacy Policy
            </h3>
            <ul className="flex flex-col gap-3">
              {["General", "Vendors", "Customers"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted hover:text-ink transition cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-md font-semibold text-ink tracking-wide mb-4">
              Terms Of Use
            </h3>
            <ul className="flex flex-col gap-3">
              {["General Terms Of Use", "Merchant Terms Of Use"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted hover:text-ink transition cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto px-4 md:px-6 lg:px-10 py-5 max-w-341.5 flex items-center justify-between">
          <p className="text-sm text-black font-light">
            &copy; Copyright 2026 | E-Marts Team
          </p>

          <div className="flex items-center gap-3">
            <Image
              src="/mastercard.svg"
              alt="Mastercard"
              width={38}
              height={24}
            />

            <Image src="/visa.svg" alt="Visa" width={48} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
