'use strict';

const uuid = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('users', [
      {
        user_id: 'f9584d5c-b11e-4148-8e12-e124782f9b9c',
        prof_id: '285021ca-0510-45cb-ba3c-4f6ad019d0f1',
        user_name: 'coord1',
        user_email: 'coord1@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem', // 1234
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 'cb1e0a9e-a9d7-447e-8429-0a0328dcf12c',
        prof_id: '3a2744c1-fa73-43f1-bceb-a8cee76e5f35',
        user_name: 'aluno1',
        user_email: 'aluno1@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Alan Pedro da Silva',
        user_email: 'alanpedro@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Alcino Dall\'Igna Júnior',
        user_email: 'alcino@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Alejandro César Frery Orgambide',
        user_email: 'acfrery@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Almir Pereira Guimarães',
        user_email: 'almir@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Davi Bibiano Brito',
        user_email: 'davi@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'André Luiz Lins de Aquino',
        user_email: 'alla@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Evandro de Barros Costa',
        user_email: 'evandro@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Aydano Pamponet Machado',
        user_email: 'aydano.machado@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Arturo Hernández Domínguez',
        user_email: 'arturohd@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Bruno Almeida Pimentel',
        user_email: 'brunopimentel@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Baldoino Fonseca dos Santos Neto',
        user_email: 'baldoino@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Cid Cavalcanti de Albuquerque',
        user_email: 'cid@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Heitor Judiss Savino',
        user_email: 'heitor.savino@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Bruno Costa e Silva Nogueira',
        user_email: 'bruno@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Erick de Andrade Barboza',
        user_email: 'erick@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Fábio Cunha de Albuquerque',
        user_email: 'fabiocal@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Ig Ibert Bittencourt Santana Pinto',
        user_email: 'ig.ibert@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Leandro Melo de Sales',
        user_email: 'leandro@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Ícaro Bezerra Queiroz de Araújo',
        user_email: 'icaro@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Marcelo Costa Oliveira',
        user_email: 'oliveiramc@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Fábio Paraguaçu Duarte da Costa',
        user_email: 'paragua@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'José Estevam Vilar Borges',
        user_email: 'estevam@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Fábio José Coutinho da Silva',
        user_email: 'fabio@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Leandro Dias da Silva',
        user_email: 'leandrodias@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Marcus de Melo Braga',
        user_email: 'marcus@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'João Raphael Souza Martins',
        user_email: 'joao@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Márcio de Medeiros Ribeiro',
        user_email: 'marcio@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Lucas Benevides Viana de Amorim',
        user_email: 'lucas@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Olival de Gusmão Freitas Júnior',
        user_email: 'olival@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Leonardo Viana Pereira',
        user_email: 'lviana@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Petrúcio Antônio Medeiros Barros',
        user_email: 'petrucio.barros@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Rafael de Amorim Silva',
        user_email: 'rafael@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Rian Gabriel Santos Pinheiro',
        user_email: 'rian@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Rodrigo de Barros Paes',
        user_email: 'rodrigo@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Ranilson Oscar Araújo Paiva',
        user_email: 'ranilsonpaiva@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Roberta Vilhena Vieira Lopes',
        user_email: 'rvvl@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Wendell Silva Soares',
        user_email: 'wendell@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Rodrigo José Sarmento Peixoto',
        user_email: 'rodrigopex@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Willy Carvalho Tiengo',
        user_email: 'willy@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Thales Miranda de Almeida Vieira',
        user_email: 'thales@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Thiago D. Cordeiro',
        user_email: 'thiago@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Xu Yang',
        user_email: 'yang@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        prof_id: 'a00d58bf-e7b9-411e-a408-e93bb9c37d08',
        user_name: 'Tiago Figueiredo Vieira',
        user_email: 'tvieira@ic.ufal.br',
        user_password: '$2b$10$7NoIELKFMijldCzQgfEQq./fMogwKLTHWSBVxNGtF0965kNMtRwem',
        user_status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {})
  }
};
