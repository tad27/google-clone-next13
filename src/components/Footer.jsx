import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-500">
      <div className="border-b border-gray-200 py-3 px-8 text-sm text-center sm:text-left">
        United Kingdom
      </div>
      <div className="flex items-center justify-evenly xl:justify-between px-5 text-sm flex-wrap">
        <div className="flex flex-col items-center sm:flex-row">
          <Link
            className="hover:underline text-gray-600 p-[15px]"
            href="https://www.google.com/intl/en_uk/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
          >
            Advertising
          </Link>
          <Link
            className="hover:underline text-gray-600 p-[15px]"
            href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
          >
            Business
          </Link>
          <Link
            className="hover:underline text-gray-600 p-[15px]"
            href="https://google.com/search/howsearchworks/?fg=1"
          >
            How Search works
          </Link>
        </div>
        <div className="order-first w-full xl:w-auto xl:order-none text-center">
          <Link
            className="hover:underline text-gray-600 p-[15px] block sm:inline"
            href="https://sustainability.google/intl/en-GB/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content="
          >
            Carbon neutral since 2007
          </Link>
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          <Link
            className="hover:underline text-gray-600 p-[15px]"
            href="https://policies.google.com/privacy?hl=en-GB&fg=1"
          >
            Privacy
          </Link>
          <Link
            className="hover:underline text-gray-600 p-[15px]"
            href="https://policies.google.com/terms?hl=en-GB&fg=1"
          >
            Terms
          </Link>
          <Link className="hover:underline text-gray-600 p-[15px]" href="">
            Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
