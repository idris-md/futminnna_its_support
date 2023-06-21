"use client";
import StyledRedditTextField from "@/component/StyledRedditTextField";
import { Message } from "@/component/message";
import { showErrorToast, showSuccessToast } from "@/component/toast_notifier";
import Role from "@/models/Role";
import studentsService from "@/services/student-service";
import {
    Button,
    Collapse,
    Divider,
    Grid,
    Typography
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

export default function AuthPage() {
  const [message, setMessage] = useState<{
    message: string;
    isError: Boolean;
  } | null>();
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  return (
    <Grid
      item
      container
      sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
    >
      <Grid
        container
        direction="row"
        item
        sx={{
          display: "flex",
          overflow: "scroll",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "55vw",
          height: "70vh",
          // border: "1px solid #e3e3e3",
          borderRadius: 3,
          backgroundColor: "#fff",
        }}
      >

        <Grid
          item
          container
          direction="column"
          sx={{
            display: { xs: "none", md: "flex" },
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
            height: "100%",
            paddingX: 2,
            position: "relative",
          }}
          xs={0}
          md={5.7}
        >
          <Grid item>
            <Typography
              variant="body1"
              color="primary"
              sx={{ textAlign: "center", fontWeight: 500, fontSize: "28px" }}
            >
              eDocumentation
            </Typography>
          </Grid>
          <Divider
            variant="middle"
            sx={{ marginY: 1, height: "0.5px", bgcolor: "#fff" }}
          />
          <Grid item>
            <Typography
              variant="body1"
              color="#aaa"
              sx={{ textAlign: "center", fontWeight: 500, fontSize: "22px" }}
            >
              System
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6.3}
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          //   justify="center"
          direction="column"
        >
          <Grid
            item
            sx={{
              display: "flex",
              position: "relative",
              height: "75px",
              width: "310px",
            }}
          >
            <Image src="/coe_logo.png" alt="" fill />
          </Grid>

          <Typography
            variant="body1"
            color="primary"
            sx={{ textAlign: "center", fontWeight: 500, fontSize: "18px" }}
          >
            AUTHENTICATION
          </Typography>

          <Divider sx={{ marginTop: 1, marginBottom: 3 }} />

          <Grid item sx={{ marginBottom: 2 }}>
            <Collapse in={message != null}>
              <Message
                message={message!?.message}
                isError={message!?.isError}
              />
            </Collapse>
          </Grid>

          {/* <Grid item sx={{ marginBottom: 1 }}>
            <Typography>Sign in to continue</Typography>
          </Grid> */}

          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              // try {

              const authResponse = await signIn("credentials", {
                redirect: false,
                username: values.username,
                password: values.password,
                // callbackUrl: `${window.location.origin}`,
              });

              if (authResponse?.ok) {
                showSuccessToast("Login successful");
                const session = await getSession();

                const isStudent = session?.user?.roles?.some(
                  (role: Role) => role.name === "student"
                );

                if (isStudent == true) {
                  const profile = await studentsService.getStudentProfile();
                  if (profile?.passport) {
                    router.push("user");
                  } else {
                    router.push("get-started/passport");
                  }
                } else {
                  router.push("admin");
                }
              } else {
                showErrorToast(authResponse?.error!);
                setMessage({
                  message: authResponse?.error!,
                  isError: true,
                });
              }

              // const authService = new AuthService(axiosInstance);
              // const response = await authService.authenticateStudent(
              //   values.username,
              //   values.password
              // );

              // toast.success("Successfully logged in!");

              // if (response.isStudent) {
              //   response.passport
              //     ? router.push("profile")
              //     : router.push("signup/passport");
              // } else {
              // router.push("approve");
              // }

              // } catch (err) {
              //   console.log("haaaaaaaaaaaa", err);
              //   const message = getErrorMessageFromError(err);
              //   setMessage({
              //     message,
              //     isError: true,
              //   });
              // }
            }}
          >
            {({ errors, touched }) => {
              return (
                <Form>
                  <Grid item container spacing={1} direction="column">
                    <Grid item>
                      <Field
                        fullWidth
                        name="username"
                        as={StyledRedditTextField}
                        variant="outlined"
                        placeholder="Matric Number"
                        label="Matric Number"
                        size="small"
                        error={errors.username && touched.username}
                      />
                    </Grid>

                    <Grid item>
                      <Field
                        fullWidth
                        name="password"
                        size="small"
                        type="password"
                        as={StyledRedditTextField}
                        error={errors.password && touched.password}
                        variant="outlined"
                        placeholder="Password"
                        label="Password"
                      />
                    </Grid>

                    <Grid item sx={{ marginTop: 1 }}>
                      <Button
                        fullWidth
                        // variant="outlined"
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Sign In
                      </Button>
                    </Grid>

                    <Divider sx={{ marginTop: 1 }}>
                      {`I'm a new student`}
                    </Divider>

                    <Grid item sx={{ marginTop: 1 }}>
                      <Link
                        href="get-started"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          fullWidth
                          color="secondary"
                          size="medium"
                          variant="outlined"
                          type="submit"
                        >
                          Start here
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="password-reset">
                        Forgot password? click here to reset
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
}
