INSERT INTO department (name)
VALUES  ('HR'),
        ('Marketing'),
        ('Security'),
        ('CyberSecurity'),
        ('Customer Service');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Marketing Representative', 82000, 2),
        ('Customer Service Rep', 51000, 5),
        ('Ethical Hacker', 125000, 4),
        ('Head of HR', 95000, 1),
        ('Security Guard', 49000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Naruto', 'Uzumaki', 4, null),
        ('Sasuke', 'Uchiha', 3, 1),
        ('Light', 'Yagami', 2, null),
        ('Natsu', 'Dragneel', 5, null),
        ('Joe', 'Goldberg', 1, null),
        ('Harrison', 'Mcneil', 3,2),
        ('Edward', 'Elric', 5, 4),
        ('Hinata', 'Shoyo', 1, null),
        ('Eren', 'Yaeger', 1, null),
        ('Aoi', 'Ashito', 2, 3);

