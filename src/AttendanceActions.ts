export interface AttendanceActions {
  markAbsent(): void;
  askPermission(): void;
  markLate(): void;
  markAttendance(): void;
}