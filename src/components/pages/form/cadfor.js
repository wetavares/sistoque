import React from 'react';



<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">Primeiro nome</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="Nome" value="Mark" required>
      <div class="valid-tooltip">
        Tudo certo!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Sobrenome</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Sobrenome" value="Otto" required>
      <div class="valid-tooltip">
        Tudo certo!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Usuário</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Usuário" aria-describedby="validationTooltipUsernamePrepend" required>
        <div class="invalid-tooltip">
          Por favor, escolha um usuário válido e único.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">Cidade</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="Cidade" required>
      <div class="invalid-tooltip">
        Por favor, informe uma cidade válida.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">Estado</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="Estado" required>
      <div class="invalid-tooltip">
        Por favor, informe um estado válido.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">CEP</label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="CEP" required>
      <div class="invalid-tooltip">
        Por favor, informe um CEP válido.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Enviar</button>
</form>