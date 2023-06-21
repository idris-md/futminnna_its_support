import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { DesktopDatePicker, DesktopDateTimePicker } from "@mui/x-date-pickers";

const StyledSearchTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
  },
}));

const StyledRedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true }}
    {...props}
    variant="filled"
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#EFEFEF" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const RedditStyledDatePicker = styled(
  (props: {
    value: string;
    setFieldValue: Function;
    fullWidth: boolean;
    name: string;
  }) => {
    console.log(props);
    return (
      <DesktopDatePicker
        // fullWidth
        inputFormat="YYYY-MM-DD"
        // value={props.value}
        InputProps={{ disableUnderline: true }}
        onChange={(e) => {
          props.setFieldValue(props.name, e);
        }}
        renderInput={(params) => (
          <StyledRedditTextField {...params} variant="filled" size="small" />
        )}
        {...props}
      />
    );
  }
)((theme) => ({
  // "& .MuiFilledInput-root": {
  //   overflow: "hidden",
  //   borderRadius: 4,
  //   backgroundColor: theme.palette.mode === "light" ? "#EFEFEF" : "#2b2b2b",
  //   transition: theme.transitions.create([
  //     "border-color",
  //     "background-color",
  //     "box-shadow",
  //   ]),
  //   "&:hover": {
  //     backgroundColor: "transparent",
  //   },
  //   "&.Mui-focused": {
  //     backgroundColor: "transparent",
  //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
  //     borderColor: theme.palette.primary.main,
  //   },
  // },
}));

export const RedditSelect = styled(
  (props: { value: string; setFieldValue: Function }) => <Select {...props} />,
  {
    slot: "redditSelect",
    name: "select",
  }
)(({ theme }) => ({
  "& ,MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#EFEFEF" : "#2b2b2b",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default StyledRedditTextField;

export const StyledRedditDate = (props: {
  label: string;
  id: string;
  value: string;
  name: string;
  setFieldValue: Function;
  error: boolean;
}) => {
  return (
    <FormControl fullWidth variant="filled">
      <InputLabel id={props.id} error={props.error}>
        {props.label}
      </InputLabel>
      <DesktopDatePicker
        // fullWidth
        inputFormat="YYYY-MM-DD"
        InputProps={{ disableUnderline: true }}
        onChange={(e) => {
          props.setFieldValue(props.name, e);
        }}
        renderInput={(params) => (
          <StyledRedditTextField {...params} variant="filled" size="small" />
        )}
        {...props}
      />
    </FormControl>
  );
};
// export const StyledRedditSelect = (props: {
//   error: boolean;
//   id: string;
//   label: string;
//   value: string;
//   name: string;
//   setFieldValue: Function;
//   size: number;
//   children: React.ReactNode;
// }) => {
//   return (
//     <FormControl fullWidth variant="filled">
//       <InputLabel id={props.id} error={props.error}>
//         {props.label}
//       </InputLabel>
//       <RedditSelect
//         value={props.value}
//         onChange={(e) => {
//           props.setFieldValue(props.name, e.target.value);
//         }}
//         // disableUnderline
//         // size={props.size}
//         // error={props.error}
//         // labelId={props.id}
//         id={props.id}
//       >
//         {props.children}
//       </RedditSelect>
//     </FormControl>
//   );
// };

export const StyledRedditAutoComplete = (props: {
  options: { name: string }[];
  setFieldValue: Function;
  name: string;
  label: string;
  placeholder: string;
  inputValue: string;
}) => {
  return (
    <Autocomplete
      id="tags-outlined"
      inputValue={props.inputValue}
      onChange={(event, value) => {
        // setCustomer(value);
        props.setFieldValue(props.name, value);
      }}
      options={props.options ? props.options : []}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => {
        // params.InputProps.disableUnderline = true;
        return (
          <StyledRedditTextField
            {...params}
            // InputProps={{disableUnderline:true}}
            fullWidth
            size="small"
            label={props.label}
            placeholder={props.placeholder}
          />
        );
      }}
    />
  );
};

// export const BootstrapInput = styled((props) => <InputBase {...props} />)(
//   ({ theme }) => ({
//     // "label + &": {
//     //   marginTop: theme.spacing(3),
//     // },
//     "& .MuiInputBase-input": {
//       borderRadius: 4,
//       position: "relative",
//       backgroundColor: theme.palette.mode === "light" ? "#EFEFEF" : "#2b2b2b",
//       fontSize: 16,
//       padding: "10px 26px 10px 12px",
//       transition: theme.transitions.create(["border-color", "box-shadow"]),
//       "&:focus": {
//         backgroundColor: "transparent",
//         boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//         borderColor: theme.palette.primary.main,
//       },
//       "&:hover": {
//         backgroundColor: "transparent",
//       },
//     },
//   })
// );
