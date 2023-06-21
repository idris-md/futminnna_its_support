import Role from "@/models/Role";

export interface User {
  name?: string | null | undefined;
  roles?: Role[];
  username?: string;
  userProfileId?: number;
  departmentId?: number;
  schoolId?: number;
  accessToken?: string;
  refreshToken?: string;
}
