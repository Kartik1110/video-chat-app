import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, IconButton, InputAdornment, Typography } from "@mui/material";
import styled from "@mui/styled-engine";
import { TextField } from "@mui/material";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const FormStyle = styled("form")(() => ({
  display: "grid",
  gap: 5,
  width: "30%",

  "& .MuiButton-contained": {
    fontWeight: 600,
    textTransform: "capitalize",
    padding: "0.5rem",
  },
}));

const Signup = () => {
  const [showPassword, setShowPassord] = useState(false);

  const handleTogglePassword = () => setShowPassord(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.table(data);
    alert(JSON.stringify(data));
    reset({ name: "", email: "", password: "" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <FormStyle>
        <TextField
          variant="outlined"
          fullWidth
          type="name"
          label="Name"
          error={errors.name ? true : false}
          helperText={errors.name && "Enter a valid input"}
          {...register("name", { required: true })}
        />

        {/* Email */}
        <TextField
          variant="outlined"
          fullWidth
          type="email"
          label="Email address"
          error={errors.email ? true : false}
          helperText={errors.email && "Enter a valid email address"}
          {...register("email", { required: true })}
        />

        {/* Password */}
        <TextField
          variant="outlined"
          fullWidth
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleTogglePassword}>
                  {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Password"
          error={errors.password ? true : false}
          helperText={errors.password && "Enter a valid password (5-15 characters)"}
          {...register("password", {
            required: true,
            minLength: 5,
            maxLength: 15,
          })}
        />


        <Button onClick={handleSubmit(onSubmit)} variant="contained" disableElevation>
          Signup
        </Button>
        <Typography>Already have an account?<Link to={"/login"} style={{ color: "blue", paddingLeft: '10px' }}>Login</Link></Typography>
      </FormStyle>
    </Box>
  );
};

export default Signup;
