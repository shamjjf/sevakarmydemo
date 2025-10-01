import React, { useState, useRef, useEffect } from "react";
import phoneData from "../utils/PhoneInput.json";
import countryFlags from "../utils/countryFlag.json";

const PhoneInputComponent = ({
  selectedCountryData,
  phoneNumber,
  dialingCode,
  handleCountryChange,
  handlePhoneNumberChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const flagDivRef = useRef(null);
  const dropdownRef = useRef(null);

  const combinedPhoneData = phoneData.map((phoneCountry) => {
    const flagData = countryFlags.find(
      (flagCountry) =>
        flagCountry.code &&
        phoneCountry.countryCode &&
        flagCountry.code.toLowerCase() ===
          phoneCountry.countryCode.toLowerCase()
    );
    return {
      ...phoneCountry,
      flag: flagData ? flagData.code : null,
    };
  });

  const filteredCountries = combinedPhoneData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  const handleCountrySelect = (countryCode, dialingCode) => {
    handleCountryChange({ target: { value: countryCode } });
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      flagDivRef.current &&
      !flagDivRef.current.contains(event.target) &&
      !dropdownRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  function convertFormatToRegex(format) {
    const filteredFormat = format.replace(/[^#]/g, "");
    // Define a mapping from format characters to regex
    const mapping = {
      "#": "\\d", // Represents a digit
      0: "\\d", // Represents a digit (could be used interchangeably with #)
      " ": "\\s?", // Represents optional space
      "-": "\\-", // Represents literal hyphen
      "(": "\\(", // Represents literal opening parenthesis
      ")": "\\)", // Represents literal closing parenthesis
    };

    // Convert the phone number format to regex pattern
    return filteredFormat
      .split("")
      .map((char) => mapping[char] || char)
      .join("");
  }
  return (
    <div
      className={`flex relative border border-gray-300 rounded-lg h-[50px] ${
        isFocused ? "outline-[#00553E] outline-2 outline" : ""
      }`}
    >
      <div className="border-0 flag-div" onClick={handleDropdownToggle}>
        <span className="absolute start-10 top-3 cursor-pointer">
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </span>
        <button
          type="button"
          className="w-[60px] h-full p-4 bg-transparent flex justify-center items-center cursor-pointer border-0 border-r border-gray-300"
        >
          {selectedCountryData ? (
            <span>
              {selectedCountryData.code && (
                <div
                  className={`selected-country-flag flag ${selectedCountryData.code}`}
                />
              )}
            </span>
          ) : (
            <div className={`selected-country-flag flag in`} />
          )}
        </button>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-[51px] start-0 end-0 bg-white border-gray-400 z-30 max-h-[250px] overflow-y-auto shadow-custom"
          >
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by country name or code"
              className="px-4 py-3 border border-gray-400 rounded-lg mx-4 my-3 w-[92.5%] focus:ring-0 focus:border-0 focus:outline-[#00553E]"
              onClick={(e) => e.stopPropagation()}
            />
            <ul>
              {filteredCountries.map((country) => (
                <li
                  key={country.code}
                  onClick={() =>
                    handleCountrySelect(country.code, country.dialingCode)
                  }
                  className="flex gap-2 px-2 py-1.5 cursor-pointer items-center hover:bg-[#cccccc]"
                >
                  {country.code && (
                    <div
                      title={`${country.name} flag `}
                      className={`country-flag flag ${country.code ? country.code : "in"}`}
                    />
                  )}
                  {country.name} ({country.dialingCode})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative">
        <span className="absolute left-2 top-3">
          +{selectedCountryData?.dialingCode || "91"}
        </span>
        <input
          id="phone"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          pattern={`^${selectedCountryData ? convertFormatToRegex(selectedCountryData?.phoneNumberFormat) : "\\d{10}"}$`}
          // title={`Mobile number should match the format: ${selectedCountryData ? selectedCountryData.phoneNumberFormat.replace(/#/g, "digit") : "10 digits"} (count of 'h#': ${selectedCountryData ? (selectedCountryData.phoneNumberFormat.match(/h#/g) || []).length : 0})`}
          className="w-full border-0 bg-transparent focus:outline-none focus:ring-0 focus:border-0 ps-12 pt-3"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
        />
      </div>
    </div>
  );
};

export default PhoneInputComponent;
