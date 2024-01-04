USE employee_management;

-- Insert departments
INSERT INTO departments (department_name) VALUES
  ('Human Resources'),
  ('Marketing'),
  ('IT');

-- Insert roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('HR Manager', 70000, 1),
  ('Marketing Specialist', 60000, 2),
  ('Software Engineer', 80000, 3),
  ('IT Manager', 90000, 3);

-- Insert employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, 2),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 3, 4),
  ('Alice', 'Williams', 4, 2),
  ('Charlie', 'Brown', 3, 4),
  ('Eva', 'Davis', 2, 1);

