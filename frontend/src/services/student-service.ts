import axiosInstance from "@/common/axios-instance";
import { dataURLtoBlob } from "@/common/utils";
import NewStudent from "@/models/api/NewStudent";
import Student, { StudentOnboard, StudentUpdate } from "@/models/Student";
import { AxiosInstance } from "axios";

class StudentService {
  constructor(private http: AxiosInstance) {}

  async onboardStudent(uuid: string, data: StudentOnboard) {
    const response = await this.http.put<Student>(
      `students/onboard/${uuid}`,
      data
    );
    return response.data;
  }

  async addStudent(matricNumber: string) {
    const response = await this.http.get<Student>(`students/eligibility`, {
      params: {
        matricNumber,
      },
    });
    return response.data;
  }

  async getStudents() {
    const response = await this.http.get<Student[]>("students", {
      params: {},
    });
    return response.data;
  }

  async getStudent(matricNumber: string) {
    const response = await this.http.get<Student>(`students/${matricNumber}`);
    return response.data;
  }

  async getStudentProfile() {
    const response = await this.http.get<Student>(`students/profile`);
    return response.data;
  }

  async updateStudent(uuid: string, data: StudentUpdate) {
    
    const response = await this.http.put<Student>(`students/${uuid}`, data);
    return response.data;
  }
  async uploadPassport(passport: string) {
    const bodyFormData = new FormData();

    const passportFile = dataURLtoBlob(passport);
    bodyFormData.append("passport", passportFile);

    const response = await this.http.post("students/passport", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data;",
      },
    });

    return response.data;
  }
}

const studentsService = new StudentService(axiosInstance);
export default studentsService;
