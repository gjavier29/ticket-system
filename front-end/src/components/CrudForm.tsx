import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

type Props = {};

const CrudForm: React.FC = (props: Props) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="flex flex-col">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input
            placeholder="Name"
          />
        </Form.Item>

        <Form.Item
          name="price"
          rules={[{ required: true, message: "Please input your Price!" }]}
        >
          <Input
            type="number"
            placeholder="price"
          />
        </Form.Item>

        <Form.Item
          name="quantity"
          rules={[{ required: true, message: "Please input your Quantity!" }]}
        >
          <Input
            type="number"
            placeholder="Quantity"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CrudForm;
