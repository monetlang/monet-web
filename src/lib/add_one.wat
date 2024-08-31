(module
  (func $add_one (param $n i32) (result i32)
    (i32.add (local.get $n) (i32.const 1))
  )
  (export "addOne" (func $add_one))
)