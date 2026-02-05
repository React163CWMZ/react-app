import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ======================
// 1. Zod Schema 定义（校验规则）
// ======================
const formSchema = z
  .object({
    username: z
      .string()
      .min(2, "用户名至少 2 个字符")
      .max(20, "用户名最多 20 个字符")
      .nonempty("请输入用户名"),

    email: z.string().email("邮箱格式不正确").nonempty("请输入邮箱"),

    password: z
      .string()
      .min(6, "密码至少 6 位")
      .max(20, "密码最多 20 位")
      .nonempty("请输入密码"),

    confirmPassword: z.string().nonempty("请确认密码"),

    phone: z
      .string()
      .regex(/^1[3-9]\d{9}$/, "手机号格式不正确")
      .nonempty("请输入手机号"),

    agree: z.boolean().refine((val) => val === true, {
      message: "必须同意用户协议",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次密码不一致",
    path: ["confirmPassword"],
  });

// ======================
// 2. 从 Zod 自动推导出 TS 类型（无需手动写 interface）
// ======================
type FormData = z.infer<typeof formSchema>;

// ======================
// 3. 表单组件
// ======================
export default function NativeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all", // 输入时实时校验onChange
    shouldFocusError: true,
    defaultValues: {
      username: "lily",
      email: "hao@163.com",
      password: "123123",
      confirmPassword: "123123",
      phone: "13578906780",
      agree: false,
    },
  });

  // 模拟提交（可替换为真实接口）
  const onSubmit = async (data: FormData) => {
    console.log("提交数据：", data);
    // 模拟请求
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("提交成功！");
    reset();
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: "0 20px" }}>
      <h2>原生表单 + RHF + Zod + TS 实战</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        {/* 用户名 */}
        <div>
          <label>用户名</label>
          <input
            type="text"
            {...register("username")}
            disabled={isSubmitting}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
          {errors.username && (
            <p style={{ color: "red", margin: "4px 0 0" }}>
              {errors.username.message}
            </p>
          )}
        </div>

        {/* 邮箱 */}
        <div>
          <label>邮箱</label>
          <input
            type="email"
            {...register("email")}
            disabled={isSubmitting}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
          {errors.email && (
            <p style={{ color: "red", margin: "4px 0 0" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* 密码 */}
        <div>
          <label>密码</label>
          <input
            type="password"
            {...register("password")}
            disabled={isSubmitting}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
          {errors.password && (
            <p style={{ color: "red", margin: "4px 0 0" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        {/* 确认密码 */}
        <div>
          <label>确认密码</label>
          <input
            type="password"
            {...register("confirmPassword")}
            disabled={isSubmitting}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red", margin: "4px 0 0" }}>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* 手机号 */}
        <div>
          <label>手机号</label>
          <input
            type="tel"
            {...register("phone")}
            disabled={isSubmitting}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
          {errors.phone && (
            <p style={{ color: "red", margin: "4px 0 0" }}>
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* 同意协议 */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            type="checkbox"
            {...register("agree")}
            disabled={isSubmitting}
            id="agree"
          />
          <label htmlFor="agree">我已阅读并同意用户协议</label>
        </div>
        {errors.agree && (
          <p style={{ color: "red", margin: "-12px 0 0" }}>
            {errors.agree.message}
          </p>
        )}

        {/* 按钮区 */}
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              flex: 1,
              padding: 10,
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {isSubmitting ? "提交中..." : "提交"}
          </button>

          <button
            type="button"
            onClick={() => reset()}
            disabled={isSubmitting}
            style={{
              flex: 1,
              padding: 10,
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            重置
          </button>
        </div>
      </form>
    </div>
  );
}
