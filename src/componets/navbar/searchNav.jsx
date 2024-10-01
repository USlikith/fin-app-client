import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

// Styled FormControl for custom min-width and dynamic width based on input
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: "200px", // Minimum fixed width
  borderRadius: "150px", // Rounded corners for modern look
  [theme.breakpoints.up("md")]: {
    width: "auto", // Allow width to adjust based on input
  },
}));

export default function Search() {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate API call for search suggestions
    if (inputValue) {
      setLoading(true);
      fetch(`https://restcountries.com/v3.1/all`)
        .then((response) => response.json())
        .then((data) => {
          const countryNames = data.map((country) => country.name.common);
          const filteredOptions = countryNames.filter((name) =>
            name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setOptions(filteredOptions);
          setLoading(false);
        });
    } else {
      setOptions([]);
    }
  }, [inputValue]);

  return (
    <StyledFormControl variant="outlined">
      <Autocomplete
        freeSolo
        options={options}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        loading={loading}
        renderInput={(params) => (
          <OutlinedInput
            {...params.InputProps}
            size="small"
            placeholder="Search for a country..."
            sx={{
              borderRadius: "20px", // More rounded for elegance
              padding: "10px 20px", // Spacious and modern look
              backgroundColor: "#f5f5f5", // Subtle background
              transition: "width 0.3s ease", // Smooth transition for width change
              width: `${Math.max(300, inputValue.length * 12)}px`, // Dynamic width based on input length
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ccc", // Softer outline color
                },
                "&:hover fieldset": {
                  borderColor: "#999", // Darker on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3f51b5", // Primary color when focused
                },
              },
            }}
            startAdornment={
              <InputAdornment position="start" sx={{ color: "text.primary" }}>
                <SearchRoundedIcon fontSize="medium" />
              </InputAdornment>
            }
            endAdornment={
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            }
            inputProps={{
              ...params.inputProps,
              "aria-label": "search",
            }}
          />
        )}
      />
    </StyledFormControl>
  );
}
