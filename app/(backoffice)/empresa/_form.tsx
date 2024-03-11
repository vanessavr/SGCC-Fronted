import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FormularioPerfilEmpresa() {
  return (
      <form action="" className="flex flex-col space-y-3">
          <Label htmlFor="">Nombre</Label>
          <Input type="text" placeholder="Nombre" className="rounded-full" />
          <Label htmlFor="">NIT</Label>
          <Input type="text" placeholder="NIT" className="rounded-full" />
          <Label htmlFor="">Representante legal</Label>
          <Input type="text" placeholder="Representante legal" className="rounded-full" />
          <Label htmlFor="">Razon Social</Label>
          <Input type="text" placeholder="Razon social" className="rounded-full" />
          <Label htmlFor="">Correo electrónico</Label>
          <Input type="email" placeholder="Correo electrónico" className="rounded-full" />
          <Label htmlFor="">Celular</Label>
          <Input type="number" placeholder="Celular" className="rounded-full" />
          <Label htmlFor="">Dirección</Label>
          <Input type="text" placeholder="Dirección" className="rounded-full" />
          <Label htmlFor="">Actividad económica</Label>
          <Select>
              <SelectTrigger>
                  <SelectValue placeholder="Actividad econímica" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
              </SelectContent>
          </Select>
          <Label htmlFor="">Departamento</Label>
          <Select>
              <SelectTrigger>
                  <SelectValue placeholder="Departamento" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
              </SelectContent>
          </Select>
          <Label htmlFor="">Ciudad</Label>
          <Select>
              <SelectTrigger>
                  <SelectValue placeholder="Ciudad" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
              </SelectContent>
          </Select>
          <Label htmlFor="">Rol</Label>
          <Select>
              <SelectTrigger>
                  <SelectValue placeholder="Rol" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
              </SelectContent>
          </Select>
          <Button className="rounded-full w-full">Guardar</Button>
      </form>
  )
}