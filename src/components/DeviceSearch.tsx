import { useEffect, useMemo, useRef, useState } from "react";
import { devices } from "../constants/devices";
import { usePopup } from "../hooks/usePopup";
import { Link } from "react-router-dom";

function DeviceSearch() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [searchKey, setSearchKey] = useState("");

  const { isOpen, open, close } = usePopup(containerRef);

  useEffect(() => {
    if (searchKey) {
      open();
    } else {
      close();
    }
  }, [searchKey, open, close]);

  useEffect(() => {
    if (!isOpen) {
      setSearchKey("");
    }
  }, [isOpen]);

  const filteredDevices = useMemo(
    () =>
      devices.filter((device) =>
        device.label.toLowerCase().includes(searchKey.toLowerCase())
      ),
    [searchKey]
  );

  return (
    <div ref={containerRef}>
      <div className="relative">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          className="w-full py-2 pl-4 text-lg border border-gray-400 rounded outline-none bg-background-2 pr-9"
          placeholder="Giga KN-1011"
        />

        <div className="absolute -translate-y-1/2 right-3 top-1/2">
          <svg
            className="w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
          </svg>
        </div>
      </div>

      {(isOpen && !!filteredDevices.length) && (
        <div className="relative mt-0.5">
          <div className="absolute top-0 left-0 w-full overflow-auto bg-white border border-gray-500 rounded max-h-96">
            {devices
              .filter((device) =>
                device.label.toLowerCase().includes(searchKey.toLowerCase())
              )
              .map((device) => (
                <Link
                  key={device.link}
                  to={device.link}
                  className="block px-4 py-2 hover:bg-gray-lighter hover:bg-opacity-80"
                >
                  <span>{device.label}</span>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DeviceSearch;
